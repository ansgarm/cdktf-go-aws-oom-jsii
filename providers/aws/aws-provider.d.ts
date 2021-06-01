import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AwsProviderConfig {
    /**
     * The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}
     */
    readonly accessKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}.
     */
    readonly allowedAccountIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}.
     */
    readonly forbiddenAccountIds?: string[];
    /**
     * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}
     */
    readonly insecure?: boolean;
    /**
     * The maximum number of times an AWS API request is being executed.
     *
     * If the API request still fails, an error is
     * thrown.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}
     */
    readonly maxRetries?: number;
    /**
     * The profile for API operations. If not set, the default profile created with `aws configure` will be used.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}
     */
    readonly profile?: string;
    /**
     * The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}
     */
    readonly region: string;
    /**
     * Set this to true to force the request to use path-style addressing, i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}
     */
    readonly s3ForcePathStyle?: boolean;
    /**
     * The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}
     */
    readonly secretKey?: string;
    /**
     * The path to the shared credentials file. If not set this defaults to ~/.aws/credentials.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}
     */
    readonly sharedCredentialsFile?: string;
    /**
     * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}
     */
    readonly skipCredentialsValidation?: boolean;
    /**
     * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}
     */
    readonly skipGetEc2Platforms?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}.
     */
    readonly skipMetadataApiCheck?: boolean;
    /**
     * Skip static validation of region name.
     *
     * Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}
     */
    readonly skipRegionValidation?: boolean;
    /**
     * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
     */
    readonly skipRequestingAccountId?: boolean;
    /**
     * session token. A session token is only required if you are using temporary security credentials.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}
     */
    readonly token?: string;
    /**
     * Alias name.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}
     */
    readonly alias?: string;
    /**
     * assume_role block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}
     */
    readonly assumeRole?: AwsProviderAssumeRole[];
    /**
     * default_tags block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}
     */
    readonly defaultTags?: AwsProviderDefaultTags[];
    /**
     * endpoints block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}
     */
    readonly endpoints?: AwsProviderEndpoints[];
    /**
     * ignore_tags block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}
     */
    readonly ignoreTags?: AwsProviderIgnoreTags[];
}
export interface AwsProviderAssumeRole {
    /**
     * Seconds to restrict the assume role session duration.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}
     */
    readonly durationSeconds?: number;
    /**
     * Unique identifier that might be required for assuming a role in another account.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}
     */
    readonly externalId?: string;
    /**
     * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}
     */
    readonly policy?: string;
    /**
     * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}
     */
    readonly policyArns?: string[];
    /**
     * Amazon Resource Name of an IAM Role to assume prior to making API calls.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}
     */
    readonly roleArn?: string;
    /**
     * Identifier for the assumed role session.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}
     */
    readonly sessionName?: string;
    /**
     * Assume role session tags.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Assume role session tag keys to pass to any subsequent sessions.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}
     */
    readonly transitiveTagKeys?: string[];
}
export interface AwsProviderDefaultTags {
    /**
     * Resource tags to default across all resources.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface AwsProviderEndpoints {
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#accessanalyzer AwsProvider#accessanalyzer}
     */
    readonly accessanalyzer?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acm AwsProvider#acm}
     */
    readonly acm?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#acmpca AwsProvider#acmpca}
     */
    readonly acmpca?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#amplify AwsProvider#amplify}
     */
    readonly amplify?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#apigateway AwsProvider#apigateway}
     */
    readonly apigateway?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appconfig AwsProvider#appconfig}
     */
    readonly appconfig?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationautoscaling AwsProvider#applicationautoscaling}
     */
    readonly applicationautoscaling?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#applicationinsights AwsProvider#applicationinsights}
     */
    readonly applicationinsights?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appmesh AwsProvider#appmesh}
     */
    readonly appmesh?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appstream AwsProvider#appstream}
     */
    readonly appstream?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#appsync AwsProvider#appsync}
     */
    readonly appsync?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#athena AwsProvider#athena}
     */
    readonly athena?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#auditmanager AwsProvider#auditmanager}
     */
    readonly auditmanager?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscaling AwsProvider#autoscaling}
     */
    readonly autoscaling?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#autoscalingplans AwsProvider#autoscalingplans}
     */
    readonly autoscalingplans?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#backup AwsProvider#backup}
     */
    readonly backup?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#batch AwsProvider#batch}
     */
    readonly batch?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#budgets AwsProvider#budgets}
     */
    readonly budgets?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloud9 AwsProvider#cloud9}
     */
    readonly cloud9?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudformation AwsProvider#cloudformation}
     */
    readonly cloudformation?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudfront AwsProvider#cloudfront}
     */
    readonly cloudfront?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudhsm AwsProvider#cloudhsm}
     */
    readonly cloudhsm?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudsearch AwsProvider#cloudsearch}
     */
    readonly cloudsearch?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudtrail AwsProvider#cloudtrail}
     */
    readonly cloudtrail?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatch AwsProvider#cloudwatch}
     */
    readonly cloudwatch?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchevents AwsProvider#cloudwatchevents}
     */
    readonly cloudwatchevents?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cloudwatchlogs AwsProvider#cloudwatchlogs}
     */
    readonly cloudwatchlogs?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codeartifact AwsProvider#codeartifact}
     */
    readonly codeartifact?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codebuild AwsProvider#codebuild}
     */
    readonly codebuild?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codecommit AwsProvider#codecommit}
     */
    readonly codecommit?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codedeploy AwsProvider#codedeploy}
     */
    readonly codedeploy?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codepipeline AwsProvider#codepipeline}
     */
    readonly codepipeline?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#codestarconnections AwsProvider#codestarconnections}
     */
    readonly codestarconnections?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidentity AwsProvider#cognitoidentity}
     */
    readonly cognitoidentity?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cognitoidp AwsProvider#cognitoidp}
     */
    readonly cognitoidp?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#configservice AwsProvider#configservice}
     */
    readonly configservice?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#connect AwsProvider#connect}
     */
    readonly connect?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#cur AwsProvider#cur}
     */
    readonly cur?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dataexchange AwsProvider#dataexchange}
     */
    readonly dataexchange?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datapipeline AwsProvider#datapipeline}
     */
    readonly datapipeline?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#datasync AwsProvider#datasync}
     */
    readonly datasync?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dax AwsProvider#dax}
     */
    readonly dax?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#detective AwsProvider#detective}
     */
    readonly detective?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#devicefarm AwsProvider#devicefarm}
     */
    readonly devicefarm?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#directconnect AwsProvider#directconnect}
     */
    readonly directconnect?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dlm AwsProvider#dlm}
     */
    readonly dlm?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dms AwsProvider#dms}
     */
    readonly dms?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#docdb AwsProvider#docdb}
     */
    readonly docdb?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ds AwsProvider#ds}
     */
    readonly ds?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#dynamodb AwsProvider#dynamodb}
     */
    readonly dynamodb?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ec2 AwsProvider#ec2}
     */
    readonly ec2?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecr AwsProvider#ecr}
     */
    readonly ecr?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecrpublic AwsProvider#ecrpublic}
     */
    readonly ecrpublic?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ecs AwsProvider#ecs}
     */
    readonly ecs?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#efs AwsProvider#efs}
     */
    readonly efs?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#eks AwsProvider#eks}
     */
    readonly eks?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticache AwsProvider#elasticache}
     */
    readonly elasticache?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elasticbeanstalk AwsProvider#elasticbeanstalk}
     */
    readonly elasticbeanstalk?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elastictranscoder AwsProvider#elastictranscoder}
     */
    readonly elastictranscoder?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#elb AwsProvider#elb}
     */
    readonly elb?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emr AwsProvider#emr}
     */
    readonly emr?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#emrcontainers AwsProvider#emrcontainers}
     */
    readonly emrcontainers?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#es AwsProvider#es}
     */
    readonly es?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#firehose AwsProvider#firehose}
     */
    readonly firehose?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fms AwsProvider#fms}
     */
    readonly fms?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forecast AwsProvider#forecast}
     */
    readonly forecast?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#fsx AwsProvider#fsx}
     */
    readonly fsx?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#gamelift AwsProvider#gamelift}
     */
    readonly gamelift?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glacier AwsProvider#glacier}
     */
    readonly glacier?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#globalaccelerator AwsProvider#globalaccelerator}
     */
    readonly globalaccelerator?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#glue AwsProvider#glue}
     */
    readonly glue?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#greengrass AwsProvider#greengrass}
     */
    readonly greengrass?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#guardduty AwsProvider#guardduty}
     */
    readonly guardduty?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iam AwsProvider#iam}
     */
    readonly iam?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#identitystore AwsProvider#identitystore}
     */
    readonly identitystore?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#imagebuilder AwsProvider#imagebuilder}
     */
    readonly imagebuilder?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#inspector AwsProvider#inspector}
     */
    readonly inspector?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iot AwsProvider#iot}
     */
    readonly iot?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotanalytics AwsProvider#iotanalytics}
     */
    readonly iotanalytics?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#iotevents AwsProvider#iotevents}
     */
    readonly iotevents?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kafka AwsProvider#kafka}
     */
    readonly kafka?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesis AwsProvider#kinesis}
     */
    readonly kinesis?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalytics AwsProvider#kinesisanalytics}
     */
    readonly kinesisanalytics?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
     */
    readonly kinesisanalyticsv2?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kinesisvideo AwsProvider#kinesisvideo}
     */
    readonly kinesisvideo?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#kms AwsProvider#kms}
     */
    readonly kms?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lakeformation AwsProvider#lakeformation}
     */
    readonly lakeformation?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lambda AwsProvider#lambda}
     */
    readonly lambda?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lexmodels AwsProvider#lexmodels}
     */
    readonly lexmodels?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#licensemanager AwsProvider#licensemanager}
     */
    readonly licensemanager?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#lightsail AwsProvider#lightsail}
     */
    readonly lightsail?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie AwsProvider#macie}
     */
    readonly macie?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#macie2 AwsProvider#macie2}
     */
    readonly macie2?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#managedblockchain AwsProvider#managedblockchain}
     */
    readonly managedblockchain?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#marketplacecatalog AwsProvider#marketplacecatalog}
     */
    readonly marketplacecatalog?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconnect AwsProvider#mediaconnect}
     */
    readonly mediaconnect?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediaconvert AwsProvider#mediaconvert}
     */
    readonly mediaconvert?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#medialive AwsProvider#medialive}
     */
    readonly medialive?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediapackage AwsProvider#mediapackage}
     */
    readonly mediapackage?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastore AwsProvider#mediastore}
     */
    readonly mediastore?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mediastoredata AwsProvider#mediastoredata}
     */
    readonly mediastoredata?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mq AwsProvider#mq}
     */
    readonly mq?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#mwaa AwsProvider#mwaa}
     */
    readonly mwaa?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#neptune AwsProvider#neptune}
     */
    readonly neptune?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkfirewall AwsProvider#networkfirewall}
     */
    readonly networkfirewall?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#networkmanager AwsProvider#networkmanager}
     */
    readonly networkmanager?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#opsworks AwsProvider#opsworks}
     */
    readonly opsworks?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#organizations AwsProvider#organizations}
     */
    readonly organizations?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#outposts AwsProvider#outposts}
     */
    readonly outposts?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#personalize AwsProvider#personalize}
     */
    readonly personalize?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pinpoint AwsProvider#pinpoint}
     */
    readonly pinpoint?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#pricing AwsProvider#pricing}
     */
    readonly pricing?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#qldb AwsProvider#qldb}
     */
    readonly qldb?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#quicksight AwsProvider#quicksight}
     */
    readonly quicksight?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ram AwsProvider#ram}
     */
    readonly ram?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#rds AwsProvider#rds}
     */
    readonly rds?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#redshift AwsProvider#redshift}
     */
    readonly redshift?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroups AwsProvider#resourcegroups}
     */
    readonly resourcegroups?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
     */
    readonly resourcegroupstaggingapi?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53 AwsProvider#route53}
     */
    readonly route53?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53domains AwsProvider#route53domains}
     */
    readonly route53Domains?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#route53resolver AwsProvider#route53resolver}
     */
    readonly route53Resolver?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3 AwsProvider#s3}
     */
    readonly s3?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3control AwsProvider#s3control}
     */
    readonly s3Control?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3outposts AwsProvider#s3outposts}
     */
    readonly s3Outposts?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sagemaker AwsProvider#sagemaker}
     */
    readonly sagemaker?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sdb AwsProvider#sdb}
     */
    readonly sdb?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secretsmanager AwsProvider#secretsmanager}
     */
    readonly secretsmanager?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#securityhub AwsProvider#securityhub}
     */
    readonly securityhub?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#serverlessrepo AwsProvider#serverlessrepo}
     */
    readonly serverlessrepo?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicecatalog AwsProvider#servicecatalog}
     */
    readonly servicecatalog?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicediscovery AwsProvider#servicediscovery}
     */
    readonly servicediscovery?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#servicequotas AwsProvider#servicequotas}
     */
    readonly servicequotas?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ses AwsProvider#ses}
     */
    readonly ses?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shield AwsProvider#shield}
     */
    readonly shield?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#signer AwsProvider#signer}
     */
    readonly signer?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sns AwsProvider#sns}
     */
    readonly sns?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sqs AwsProvider#sqs}
     */
    readonly sqs?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssm AwsProvider#ssm}
     */
    readonly ssm?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ssoadmin AwsProvider#ssoadmin}
     */
    readonly ssoadmin?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#stepfunctions AwsProvider#stepfunctions}
     */
    readonly stepfunctions?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#storagegateway AwsProvider#storagegateway}
     */
    readonly storagegateway?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#sts AwsProvider#sts}
     */
    readonly sts?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#swf AwsProvider#swf}
     */
    readonly swf?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#synthetics AwsProvider#synthetics}
     */
    readonly synthetics?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#timestreamwrite AwsProvider#timestreamwrite}
     */
    readonly timestreamwrite?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transfer AwsProvider#transfer}
     */
    readonly transfer?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#waf AwsProvider#waf}
     */
    readonly waf?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafregional AwsProvider#wafregional}
     */
    readonly wafregional?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#wafv2 AwsProvider#wafv2}
     */
    readonly wafv2?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#worklink AwsProvider#worklink}
     */
    readonly worklink?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workmail AwsProvider#workmail}
     */
    readonly workmail?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#workspaces AwsProvider#workspaces}
     */
    readonly workspaces?: string;
    /**
     * Use this to override the default service endpoint URL.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#xray AwsProvider#xray}
     */
    readonly xray?: string;
}
export interface AwsProviderIgnoreTags {
    /**
     * Resource tag key prefixes to ignore across all resources.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}
     */
    readonly keyPrefixes?: string[];
    /**
     * Resource tag keys to ignore across all resources.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}
     */
    readonly keys?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws aws}.
 */
export declare class AwsProvider extends cdktf.TerraformProvider {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws aws} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AwsProviderConfig);
    private _accessKey?;
    get accessKey(): string | undefined;
    set accessKey(value: string | undefined);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _allowedAccountIds?;
    get allowedAccountIds(): string[] | undefined;
    set allowedAccountIds(value: string[] | undefined);
    resetAllowedAccountIds(): void;
    get allowedAccountIdsInput(): string[] | undefined;
    private _forbiddenAccountIds?;
    get forbiddenAccountIds(): string[] | undefined;
    set forbiddenAccountIds(value: string[] | undefined);
    resetForbiddenAccountIds(): void;
    get forbiddenAccountIdsInput(): string[] | undefined;
    private _insecure?;
    get insecure(): boolean | undefined;
    set insecure(value: boolean | undefined);
    resetInsecure(): void;
    get insecureInput(): boolean | undefined;
    private _maxRetries?;
    get maxRetries(): number | undefined;
    set maxRetries(value: number | undefined);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _profile?;
    get profile(): string | undefined;
    set profile(value: string | undefined);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _region;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _s3ForcePathStyle?;
    get s3ForcePathStyle(): boolean | undefined;
    set s3ForcePathStyle(value: boolean | undefined);
    resetS3ForcePathStyle(): void;
    get s3ForcePathStyleInput(): boolean | undefined;
    private _secretKey?;
    get secretKey(): string | undefined;
    set secretKey(value: string | undefined);
    resetSecretKey(): void;
    get secretKeyInput(): string | undefined;
    private _sharedCredentialsFile?;
    get sharedCredentialsFile(): string | undefined;
    set sharedCredentialsFile(value: string | undefined);
    resetSharedCredentialsFile(): void;
    get sharedCredentialsFileInput(): string | undefined;
    private _skipCredentialsValidation?;
    get skipCredentialsValidation(): boolean | undefined;
    set skipCredentialsValidation(value: boolean | undefined);
    resetSkipCredentialsValidation(): void;
    get skipCredentialsValidationInput(): boolean | undefined;
    private _skipGetEc2Platforms?;
    get skipGetEc2Platforms(): boolean | undefined;
    set skipGetEc2Platforms(value: boolean | undefined);
    resetSkipGetEc2Platforms(): void;
    get skipGetEc2PlatformsInput(): boolean | undefined;
    private _skipMetadataApiCheck?;
    get skipMetadataApiCheck(): boolean | undefined;
    set skipMetadataApiCheck(value: boolean | undefined);
    resetSkipMetadataApiCheck(): void;
    get skipMetadataApiCheckInput(): boolean | undefined;
    private _skipRegionValidation?;
    get skipRegionValidation(): boolean | undefined;
    set skipRegionValidation(value: boolean | undefined);
    resetSkipRegionValidation(): void;
    get skipRegionValidationInput(): boolean | undefined;
    private _skipRequestingAccountId?;
    get skipRequestingAccountId(): boolean | undefined;
    set skipRequestingAccountId(value: boolean | undefined);
    resetSkipRequestingAccountId(): void;
    get skipRequestingAccountIdInput(): boolean | undefined;
    private _token?;
    get token(): string | undefined;
    set token(value: string | undefined);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _assumeRole?;
    get assumeRole(): AwsProviderAssumeRole[] | undefined;
    set assumeRole(value: AwsProviderAssumeRole[] | undefined);
    resetAssumeRole(): void;
    get assumeRoleInput(): AwsProviderAssumeRole[] | undefined;
    private _defaultTags?;
    get defaultTags(): AwsProviderDefaultTags[] | undefined;
    set defaultTags(value: AwsProviderDefaultTags[] | undefined);
    resetDefaultTags(): void;
    get defaultTagsInput(): AwsProviderDefaultTags[] | undefined;
    private _endpoints?;
    get endpoints(): AwsProviderEndpoints[] | undefined;
    set endpoints(value: AwsProviderEndpoints[] | undefined);
    resetEndpoints(): void;
    get endpointsInput(): AwsProviderEndpoints[] | undefined;
    private _ignoreTags?;
    get ignoreTags(): AwsProviderIgnoreTags[] | undefined;
    set ignoreTags(value: AwsProviderIgnoreTags[] | undefined);
    resetIgnoreTags(): void;
    get ignoreTagsInput(): AwsProviderIgnoreTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
