import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}.
     */
    readonly semanticVersion?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application}.
 */
export declare class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig);
    private _applicationId;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    get id(): string;
    get name(): string;
    get requiredCapabilities(): string[];
    private _semanticVersion?;
    get semanticVersion(): string;
    set semanticVersion(value: string);
    resetSemanticVersion(): void;
    get semanticVersionInput(): string | undefined;
    get sourceCodeUrl(): string;
    get templateUrl(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
