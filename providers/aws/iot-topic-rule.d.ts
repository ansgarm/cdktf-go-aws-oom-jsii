import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#description IotTopicRule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#enabled IotTopicRule#enabled}.
     */
    readonly enabled: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#name IotTopicRule#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql IotTopicRule#sql}.
     */
    readonly sql: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql_version IotTopicRule#sql_version}.
     */
    readonly sqlVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags IotTopicRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags_all IotTopicRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * cloudwatch_alarm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
     */
    readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
    /**
     * cloudwatch_metric block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
     */
    readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
    /**
     * dynamodb block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
     */
    readonly dynamodb?: IotTopicRuleDynamodb[];
    /**
     * dynamodbv2 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
     */
    readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
    /**
     * elasticsearch block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
     */
    readonly elasticsearch?: IotTopicRuleElasticsearch[];
    /**
     * error_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#error_action IotTopicRule#error_action}
     */
    readonly errorAction?: IotTopicRuleErrorAction[];
    /**
     * firehose block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
     */
    readonly firehose?: IotTopicRuleFirehose[];
    /**
     * iot_analytics block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
     */
    readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
    /**
     * iot_events block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
     */
    readonly iotEvents?: IotTopicRuleIotEvents[];
    /**
     * kinesis block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
     */
    readonly kinesis?: IotTopicRuleKinesis[];
    /**
     * lambda block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
     */
    readonly lambda?: IotTopicRuleLambda[];
    /**
     * republish block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
     */
    readonly republish?: IotTopicRuleRepublish[];
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
     */
    readonly s3?: IotTopicRuleS3[];
    /**
     * sns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
     */
    readonly sns?: IotTopicRuleSns[];
    /**
     * sqs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
     */
    readonly sqs?: IotTopicRuleSqs[];
    /**
     * step_functions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
     */
    readonly stepFunctions?: IotTopicRuleStepFunctions[];
}
export interface IotTopicRuleCloudwatchAlarm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}.
     */
    readonly alarmName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}.
     */
    readonly stateReason: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}.
     */
    readonly stateValue: string;
}
export interface IotTopicRuleCloudwatchMetric {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}.
     */
    readonly metricNamespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}.
     */
    readonly metricTimestamp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}.
     */
    readonly metricUnit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}.
     */
    readonly metricValue: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleDynamodb {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}.
     */
    readonly hashKeyField: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}.
     */
    readonly hashKeyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}.
     */
    readonly hashKeyValue: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}.
     */
    readonly operation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}.
     */
    readonly payloadField?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}.
     */
    readonly rangeKeyField?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}.
     */
    readonly rangeKeyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}.
     */
    readonly rangeKeyValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}.
     */
    readonly tableName: string;
}
export interface IotTopicRuleDynamodbv2PutItem {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}.
     */
    readonly tableName: string;
}
export interface IotTopicRuleDynamodbv2 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * put_item block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
     */
    readonly putItem?: IotTopicRuleDynamodbv2PutItem[];
}
export interface IotTopicRuleElasticsearch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}.
     */
    readonly endpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}.
     */
    readonly index: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}.
     */
    readonly type: string;
}
export interface IotTopicRuleErrorActionCloudwatchAlarm {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}.
     */
    readonly alarmName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}.
     */
    readonly stateReason: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}.
     */
    readonly stateValue: string;
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}.
     */
    readonly metricName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}.
     */
    readonly metricNamespace: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}.
     */
    readonly metricTimestamp?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}.
     */
    readonly metricUnit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}.
     */
    readonly metricValue: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleErrorActionDynamodb {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}.
     */
    readonly hashKeyField: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}.
     */
    readonly hashKeyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}.
     */
    readonly hashKeyValue: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}.
     */
    readonly operation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}.
     */
    readonly payloadField?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}.
     */
    readonly rangeKeyField?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}.
     */
    readonly rangeKeyType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}.
     */
    readonly rangeKeyValue?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}.
     */
    readonly tableName: string;
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}.
     */
    readonly tableName: string;
}
export interface IotTopicRuleErrorActionDynamodbv2 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * put_item block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
     */
    readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem[];
}
export interface IotTopicRuleErrorActionElasticsearch {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}.
     */
    readonly endpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}.
     */
    readonly id: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}.
     */
    readonly index: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}.
     */
    readonly type: string;
}
export interface IotTopicRuleErrorActionFirehose {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}.
     */
    readonly deliveryStreamName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}.
     */
    readonly separator?: string;
}
export interface IotTopicRuleErrorActionIotAnalytics {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}.
     */
    readonly channelName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleErrorActionIotEvents {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}.
     */
    readonly inputName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}.
     */
    readonly messageId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleErrorActionKinesis {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}.
     */
    readonly partitionKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}.
     */
    readonly streamName: string;
}
export interface IotTopicRuleErrorActionLambda {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}.
     */
    readonly functionArn: string;
}
export interface IotTopicRuleErrorActionRepublish {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}.
     */
    readonly qos?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}.
     */
    readonly topic: string;
}
export interface IotTopicRuleErrorActionS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleErrorActionSns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}.
     */
    readonly messageFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}.
     */
    readonly targetArn: string;
}
export interface IotTopicRuleErrorActionSqs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}.
     */
    readonly queueUrl: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}.
     */
    readonly useBase64: boolean;
}
export interface IotTopicRuleErrorActionStepFunctions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}.
     */
    readonly executionNamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}.
     */
    readonly stateMachineName: string;
}
export interface IotTopicRuleErrorAction {
    /**
     * cloudwatch_alarm block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
     */
    readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm[];
    /**
     * cloudwatch_metric block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
     */
    readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric[];
    /**
     * dynamodb block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
     */
    readonly dynamodb?: IotTopicRuleErrorActionDynamodb[];
    /**
     * dynamodbv2 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
     */
    readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2[];
    /**
     * elasticsearch block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
     */
    readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch[];
    /**
     * firehose block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
     */
    readonly firehose?: IotTopicRuleErrorActionFirehose[];
    /**
     * iot_analytics block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
     */
    readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics[];
    /**
     * iot_events block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
     */
    readonly iotEvents?: IotTopicRuleErrorActionIotEvents[];
    /**
     * kinesis block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
     */
    readonly kinesis?: IotTopicRuleErrorActionKinesis[];
    /**
     * lambda block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
     */
    readonly lambda?: IotTopicRuleErrorActionLambda[];
    /**
     * republish block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
     */
    readonly republish?: IotTopicRuleErrorActionRepublish[];
    /**
     * s3 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
     */
    readonly s3?: IotTopicRuleErrorActionS3[];
    /**
     * sns block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
     */
    readonly sns?: IotTopicRuleErrorActionSns[];
    /**
     * sqs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
     */
    readonly sqs?: IotTopicRuleErrorActionSqs[];
    /**
     * step_functions block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
     */
    readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions[];
}
export interface IotTopicRuleFirehose {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}.
     */
    readonly deliveryStreamName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}.
     */
    readonly separator?: string;
}
export interface IotTopicRuleIotAnalytics {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}.
     */
    readonly channelName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleIotEvents {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}.
     */
    readonly inputName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}.
     */
    readonly messageId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleKinesis {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}.
     */
    readonly partitionKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}.
     */
    readonly streamName: string;
}
export interface IotTopicRuleLambda {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}.
     */
    readonly functionArn: string;
}
export interface IotTopicRuleRepublish {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}.
     */
    readonly qos?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}.
     */
    readonly topic: string;
}
export interface IotTopicRuleS3 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
}
export interface IotTopicRuleSns {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}.
     */
    readonly messageFormat?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}.
     */
    readonly targetArn: string;
}
export interface IotTopicRuleSqs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}.
     */
    readonly queueUrl: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}.
     */
    readonly useBase64: boolean;
}
export interface IotTopicRuleStepFunctions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}.
     */
    readonly executionNamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}.
     */
    readonly stateMachineName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule}.
 */
export declare class IotTopicRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotTopicRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    get enabledInput(): boolean;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sql;
    get sql(): string;
    set sql(value: string);
    get sqlInput(): string;
    private _sqlVersion;
    get sqlVersion(): string;
    set sqlVersion(value: string);
    get sqlVersionInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _cloudwatchAlarm?;
    get cloudwatchAlarm(): IotTopicRuleCloudwatchAlarm[];
    set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[]);
    resetCloudwatchAlarm(): void;
    get cloudwatchAlarmInput(): IotTopicRuleCloudwatchAlarm[] | undefined;
    private _cloudwatchMetric?;
    get cloudwatchMetric(): IotTopicRuleCloudwatchMetric[];
    set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[]);
    resetCloudwatchMetric(): void;
    get cloudwatchMetricInput(): IotTopicRuleCloudwatchMetric[] | undefined;
    private _dynamodb?;
    get dynamodb(): IotTopicRuleDynamodb[];
    set dynamodb(value: IotTopicRuleDynamodb[]);
    resetDynamodb(): void;
    get dynamodbInput(): IotTopicRuleDynamodb[] | undefined;
    private _dynamodbv2?;
    get dynamodbv2(): IotTopicRuleDynamodbv2[];
    set dynamodbv2(value: IotTopicRuleDynamodbv2[]);
    resetDynamodbv2(): void;
    get dynamodbv2Input(): IotTopicRuleDynamodbv2[] | undefined;
    private _elasticsearch?;
    get elasticsearch(): IotTopicRuleElasticsearch[];
    set elasticsearch(value: IotTopicRuleElasticsearch[]);
    resetElasticsearch(): void;
    get elasticsearchInput(): IotTopicRuleElasticsearch[] | undefined;
    private _errorAction?;
    get errorAction(): IotTopicRuleErrorAction[];
    set errorAction(value: IotTopicRuleErrorAction[]);
    resetErrorAction(): void;
    get errorActionInput(): IotTopicRuleErrorAction[] | undefined;
    private _firehose?;
    get firehose(): IotTopicRuleFirehose[];
    set firehose(value: IotTopicRuleFirehose[]);
    resetFirehose(): void;
    get firehoseInput(): IotTopicRuleFirehose[] | undefined;
    private _iotAnalytics?;
    get iotAnalytics(): IotTopicRuleIotAnalytics[];
    set iotAnalytics(value: IotTopicRuleIotAnalytics[]);
    resetIotAnalytics(): void;
    get iotAnalyticsInput(): IotTopicRuleIotAnalytics[] | undefined;
    private _iotEvents?;
    get iotEvents(): IotTopicRuleIotEvents[];
    set iotEvents(value: IotTopicRuleIotEvents[]);
    resetIotEvents(): void;
    get iotEventsInput(): IotTopicRuleIotEvents[] | undefined;
    private _kinesis?;
    get kinesis(): IotTopicRuleKinesis[];
    set kinesis(value: IotTopicRuleKinesis[]);
    resetKinesis(): void;
    get kinesisInput(): IotTopicRuleKinesis[] | undefined;
    private _lambda?;
    get lambda(): IotTopicRuleLambda[];
    set lambda(value: IotTopicRuleLambda[]);
    resetLambda(): void;
    get lambdaInput(): IotTopicRuleLambda[] | undefined;
    private _republish?;
    get republish(): IotTopicRuleRepublish[];
    set republish(value: IotTopicRuleRepublish[]);
    resetRepublish(): void;
    get republishInput(): IotTopicRuleRepublish[] | undefined;
    private _s3?;
    get s3(): IotTopicRuleS3[];
    set s3(value: IotTopicRuleS3[]);
    resetS3(): void;
    get s3Input(): IotTopicRuleS3[] | undefined;
    private _sns?;
    get sns(): IotTopicRuleSns[];
    set sns(value: IotTopicRuleSns[]);
    resetSns(): void;
    get snsInput(): IotTopicRuleSns[] | undefined;
    private _sqs?;
    get sqs(): IotTopicRuleSqs[];
    set sqs(value: IotTopicRuleSqs[]);
    resetSqs(): void;
    get sqsInput(): IotTopicRuleSqs[] | undefined;
    private _stepFunctions?;
    get stepFunctions(): IotTopicRuleStepFunctions[];
    set stepFunctions(value: IotTopicRuleStepFunctions[]);
    resetStepFunctions(): void;
    get stepFunctionsInput(): IotTopicRuleStepFunctions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
