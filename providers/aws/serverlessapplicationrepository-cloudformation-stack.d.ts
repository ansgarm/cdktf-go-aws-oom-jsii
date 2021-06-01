import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServerlessapplicationrepositoryCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.
     */
    readonly capabilities: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#name ServerlessapplicationrepositoryCloudformationStack#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.
     */
    readonly semanticVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags ServerlessapplicationrepositoryCloudformationStack#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}
     */
    readonly timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
}
export interface ServerlessapplicationrepositoryCloudformationStackTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#create ServerlessapplicationrepositoryCloudformationStack#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#delete ServerlessapplicationrepositoryCloudformationStack#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#update ServerlessapplicationrepositoryCloudformationStack#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack}.
 */
export declare class ServerlessapplicationrepositoryCloudformationStack extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServerlessapplicationrepositoryCloudformationStackConfig);
    private _applicationId;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _capabilities;
    get capabilities(): string[];
    set capabilities(value: string[]);
    get capabilitiesInput(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    outputs(key: string): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _semanticVersion?;
    get semanticVersion(): string;
    set semanticVersion(value: string);
    resetSemanticVersion(): void;
    get semanticVersionInput(): string | undefined;
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
    private _timeouts?;
    get timeouts(): ServerlessapplicationrepositoryCloudformationStackTimeouts;
    set timeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
