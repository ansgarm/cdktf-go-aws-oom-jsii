import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#classifiers GlueCrawler#classifiers}.
     */
    readonly classifiers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#configuration GlueCrawler#configuration}.
     */
    readonly configuration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#description GlueCrawler#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#name GlueCrawler#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#role GlueCrawler#role}.
     */
    readonly role: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schedule GlueCrawler#schedule}.
     */
    readonly schedule?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#security_configuration GlueCrawler#security_configuration}.
     */
    readonly securityConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#table_prefix GlueCrawler#table_prefix}.
     */
    readonly tablePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags GlueCrawler#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tags_all GlueCrawler#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * catalog_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#catalog_target GlueCrawler#catalog_target}
     */
    readonly catalogTarget?: GlueCrawlerCatalogTarget[];
    /**
     * dynamodb_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#dynamodb_target GlueCrawler#dynamodb_target}
     */
    readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[];
    /**
     * jdbc_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#jdbc_target GlueCrawler#jdbc_target}
     */
    readonly jdbcTarget?: GlueCrawlerJdbcTarget[];
    /**
     * lineage_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#lineage_configuration GlueCrawler#lineage_configuration}
     */
    readonly lineageConfiguration?: GlueCrawlerLineageConfiguration[];
    /**
     * mongodb_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#mongodb_target GlueCrawler#mongodb_target}
     */
    readonly mongodbTarget?: GlueCrawlerMongodbTarget[];
    /**
     * recrawl_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_policy GlueCrawler#recrawl_policy}
     */
    readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy[];
    /**
     * s3_target block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#s3_target GlueCrawler#s3_target}
     */
    readonly s3Target?: GlueCrawlerS3Target[];
    /**
     * schema_change_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#schema_change_policy GlueCrawler#schema_change_policy}
     */
    readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy[];
}
export interface GlueCrawlerCatalogTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#database_name GlueCrawler#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#tables GlueCrawler#tables}.
     */
    readonly tables: string[];
}
export interface GlueCrawlerDynamodbTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}.
     */
    readonly path: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}.
     */
    readonly scanAll?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_rate GlueCrawler#scan_rate}.
     */
    readonly scanRate?: number;
}
export interface GlueCrawlerJdbcTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}.
     */
    readonly connectionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}.
     */
    readonly exclusions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}.
     */
    readonly path: string;
}
export interface GlueCrawlerLineageConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.
     */
    readonly crawlerLineageSettings?: string;
}
export interface GlueCrawlerMongodbTarget {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}.
     */
    readonly connectionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}.
     */
    readonly path: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#scan_all GlueCrawler#scan_all}.
     */
    readonly scanAll?: boolean;
}
export interface GlueCrawlerRecrawlPolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#recrawl_behavior GlueCrawler#recrawl_behavior}.
     */
    readonly recrawlBehavior?: string;
}
export interface GlueCrawlerS3Target {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#connection_name GlueCrawler#connection_name}.
     */
    readonly connectionName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#exclusions GlueCrawler#exclusions}.
     */
    readonly exclusions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#path GlueCrawler#path}.
     */
    readonly path: string;
}
export interface GlueCrawlerSchemaChangePolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#delete_behavior GlueCrawler#delete_behavior}.
     */
    readonly deleteBehavior?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html#update_behavior GlueCrawler#update_behavior}.
     */
    readonly updateBehavior?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler}.
 */
export declare class GlueCrawler extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueCrawlerConfig);
    get arn(): string;
    private _classifiers?;
    get classifiers(): string[];
    set classifiers(value: string[]);
    resetClassifiers(): void;
    get classifiersInput(): string[] | undefined;
    private _configuration?;
    get configuration(): string;
    set configuration(value: string);
    resetConfiguration(): void;
    get configurationInput(): string | undefined;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _role;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _tablePrefix?;
    get tablePrefix(): string;
    set tablePrefix(value: string);
    resetTablePrefix(): void;
    get tablePrefixInput(): string | undefined;
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
    private _catalogTarget?;
    get catalogTarget(): GlueCrawlerCatalogTarget[];
    set catalogTarget(value: GlueCrawlerCatalogTarget[]);
    resetCatalogTarget(): void;
    get catalogTargetInput(): GlueCrawlerCatalogTarget[] | undefined;
    private _dynamodbTarget?;
    get dynamodbTarget(): GlueCrawlerDynamodbTarget[];
    set dynamodbTarget(value: GlueCrawlerDynamodbTarget[]);
    resetDynamodbTarget(): void;
    get dynamodbTargetInput(): GlueCrawlerDynamodbTarget[] | undefined;
    private _jdbcTarget?;
    get jdbcTarget(): GlueCrawlerJdbcTarget[];
    set jdbcTarget(value: GlueCrawlerJdbcTarget[]);
    resetJdbcTarget(): void;
    get jdbcTargetInput(): GlueCrawlerJdbcTarget[] | undefined;
    private _lineageConfiguration?;
    get lineageConfiguration(): GlueCrawlerLineageConfiguration[];
    set lineageConfiguration(value: GlueCrawlerLineageConfiguration[]);
    resetLineageConfiguration(): void;
    get lineageConfigurationInput(): GlueCrawlerLineageConfiguration[] | undefined;
    private _mongodbTarget?;
    get mongodbTarget(): GlueCrawlerMongodbTarget[];
    set mongodbTarget(value: GlueCrawlerMongodbTarget[]);
    resetMongodbTarget(): void;
    get mongodbTargetInput(): GlueCrawlerMongodbTarget[] | undefined;
    private _recrawlPolicy?;
    get recrawlPolicy(): GlueCrawlerRecrawlPolicy[];
    set recrawlPolicy(value: GlueCrawlerRecrawlPolicy[]);
    resetRecrawlPolicy(): void;
    get recrawlPolicyInput(): GlueCrawlerRecrawlPolicy[] | undefined;
    private _s3Target?;
    get s3Target(): GlueCrawlerS3Target[];
    set s3Target(value: GlueCrawlerS3Target[]);
    resetS3Target(): void;
    get s3TargetInput(): GlueCrawlerS3Target[] | undefined;
    private _schemaChangePolicy?;
    get schemaChangePolicy(): GlueCrawlerSchemaChangePolicy[];
    set schemaChangePolicy(value: GlueCrawlerSchemaChangePolicy[]);
    resetSchemaChangePolicy(): void;
    get schemaChangePolicyInput(): GlueCrawlerSchemaChangePolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
